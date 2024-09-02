import React from 'react'
import { ReactComponent as LogoIcon } from '../../images/logo.svg'
import { Button } from '../button'

export const Header = () => {
  return (
    <header className="flex align-middle items-center">
      <LogoIcon />

      <div className="ml-auto flex space-x-5">
        <Button>Login</Button>
        <Button hasBorder={true}>Rigester</Button>
      </div>
    </header>
  )
}
