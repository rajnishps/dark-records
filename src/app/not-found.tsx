import Link from "next/link"

export default function NotFound() {
  return (
    <div className="font-jedi text-center">
      <h2>Not Found</h2>
      <Link href="/">Return to deathStar</Link>
    </div>
  )
}
