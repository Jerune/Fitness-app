import { prisma } from '../../utils/db'
import { currentUser, User } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

async function createUser() {
  const user = await currentUser()

  console.log(user)
  const { id, emailAddresses } = user as User

  const isExistingUser = await prisma.user.findUnique({
    where: {
      clerkId: id,
    },
  })

  if (!isExistingUser) {
    await prisma.user.create({
      data: {
        clerkId: id,
        email: emailAddresses[0].emailAddress,
      },
    })
  }

  redirect('/training')
}

export default async function NewUserPage() {
  await createUser()
  return <div>...loading</div>
}
