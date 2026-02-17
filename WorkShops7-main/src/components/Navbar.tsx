import { Link, useLocation } from 'react-router-dom'
import { Box, Button, Flex } from '@radix-ui/themes'
import { IoHomeOutline } from 'react-icons/io5'
import { FiUser } from 'react-icons/fi'

export default function Navbar() {
  const { pathname } = useLocation()
  const isActive = (p: string) => pathname === p

  return (
    <Box
      asChild
      className="sticky top-0 z-20 border-b border-gray-200 bg-white/95 backdrop-blur"
    >
      <header>
        <Flex align="center" justify="between" px="4" py="3" className="mx-auto max-w-5xl">
          <Link to="/" className="font-bold tracking-tight no-underline text-slate-900">
            Mini Profile
          </Link>
          <Flex gap="3">
            <Link to="/" className="no-underline">
              <Button variant={isActive('/') ? 'solid' : 'soft'} highContrast>
                <IoHomeOutline /> หน้าแรก
              </Button>
            </Link>
            <Link to="/profile" className="no-underline">
              <Button variant={isActive('/profile') ? 'solid' : 'soft'} highContrast>
                <FiUser /> โปรไฟล์สั้นๆ
              </Button>
            </Link>
          </Flex>
        </Flex>
      </header>
    </Box>
  )
}
