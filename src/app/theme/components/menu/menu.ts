import { Menu } from './menu.model'

export const verticalMenuItems = [
  new Menu(
    1,
    'Dashboard',
    '/pages/dashboard',
    null,
    'tachometer',
    null,
    false,
    0
  ),

  new Menu(100, 'User Management', null, null, 'file-text-o', null, true, 0),
  new Menu(
    101,
    'Create User',
    '/pages/create-user',
    null,
    'file-text-o',
    null,
    false,
    100
  ),
  new Menu(
    102,
    'View User',
    '/pages/user',
    null,
    'file-text-o',
    null,
    false,
    100
  ),

  new Menu(
    200,
    'General Practiotioner Management',
    null,
    null,
    'file-text-o',
    null,
    true,
    0
  ),
  new Menu(
    201,
    'Create General Practiotioner',
    '/pages/create-gp',
    null,
    'file-text-o',
    null,
    false,
    200
  ),
  new Menu(
    202,
    'View General Practiotioners',
    '/pages/gp',
    null,
    'file-text-o',
    null,
    false,
    200
  ),

  new Menu(
    300,
    'Pharmacist Management',
    null,
    null,
    'file-text-o',
    null,
    true,
    0
  ),
  new Menu(
    301,
    'Create Pharmacist',
    '/pages/create-pharmacist',
    null,
    'file-text-o',
    null,
    false,
    300
  )
]
