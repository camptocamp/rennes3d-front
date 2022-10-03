import type { PhotoModel } from './photos.model'
import photo1 from '@/assets/photos/samples/photo1.png'
import photo2 from '@/assets/photos/samples/photo2.png'
import photo3 from '@/assets/photos/samples/photo3.png'

export const photoFixtures = (): PhotoModel[] => [
  {
    url: photo1,
  },
  {
    url: photo2,
  },
  {
    url: photo3,
  },
]
