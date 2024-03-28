"use client"

import { useRouter } from "next/navigation"

function Profile() {

  const router = useRouter()

  return (
    <div>
        <p>profile's:</p>

        <ul>
          <li onClick={() => router.push('/profile/1')}>profile 1</li>
          <li onClick={() => router.push('/profile/2')}>profile 2</li>
          <li onClick={() => router.push('/profile/3')}>profile 3</li>
        </ul>
    </div>
  )
}

export default Profile