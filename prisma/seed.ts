const { PrismaClient } = require("@prisma/client")
const { randomBytes } = require("crypto")

const prisma = new PrismaClient()

async function main() {
  // Create a single user
  const createdUser = await prisma.user.create({
    data: { name: "Alice", age: 25 },
  })

  // Generate random pictures for the user
  const pictures = Array.from({
    length: Math.floor(Math.random() * 5) + 1,
  }).map(() => ({
    url: generateRandomString(),
    userId: createdUser.id,
  }))

  // Create multiple pictures for the single user
  await prisma.picture.createMany({
    data: pictures,
  })

  console.log("User and pictures created successfully!")
}

// Function to generate random short strings to mimic picture URLs
function generateRandomString() {
  return `https://picsum.photos/${randomBytes(4).toString("hex")}`
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
