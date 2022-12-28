import { useEffect, useState } from 'react'
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from 'react-icon-cloud'

import type { SimpleIcon } from 'react-icon-cloud'
type FetchSimpleIconsProps = {
  simpleIcons: Record<string, SimpleIcon>
  allIcon: Record<
    string,
    {
      title: string
      hex: string
      slug: string
    }
  >
}

const useIcons = (slugs: string[]) => {
  const [icons, setIcons] = useState<FetchSimpleIconsProps>()

  useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setIcons)
  }, [slugs])

  if (icons) {
    return Object.values(icons.simpleIcons).map((icon) =>
      renderSimpleIcon({
        icon,
        size: 100,
        aProps: {
          onClick: (e) => e.preventDefault()
        }
      })
    )
  }

  return []
}

type IconCloudProps = {
  slugs: string[]
}

const IconCloud = ({ slugs }: IconCloudProps) => {
  const icons = useIcons(slugs)

  return (
    <Cloud id="canvas">
      {icons.map((icon, index) => (
        <div key={index}>{icon}</div>
      ))}
    </Cloud>
  )
}

export default IconCloud
