import { Editor } from '@/components/editor/Editor'
import Header from '@/components/ui/Header'
import { Button } from '@/components/ui/button'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div>
       <Header>
        <div className="flex w-fit ites-center justify-center gap-2">
          <p className='document-title'>
            This is Document
          </p> 
          </div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
      </Header>
      <Editor />
    </div>
  )
}

export default page
