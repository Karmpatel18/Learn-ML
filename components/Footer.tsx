import React from 'react'
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="text-neutral-900 dark:text-neutral-50 w-full max-w-full justify-between flex items-center px-6 py-4">
      <p className="tracking-tighter">Build with ❤️ by Karm</p>
      <FaXTwitter/>
    </div>
  )
}

export default Footer
