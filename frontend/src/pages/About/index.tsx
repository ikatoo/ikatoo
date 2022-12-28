import { useEffect, useState } from 'react'
import IconCloud from '../../components/IconCloud'
import { TextContainer } from '../../components/TextContainer'
import aboutService from '../../services/aboutService'
import Styles from './styles'

export type AboutProps = {
  skills: string[]
  title?: string
  description: string
  image?: {
    src: string
    alt: string
  }
}

export const About = () => {
  const [data, setData] = useState<AboutProps>()

  useEffect(() => {
    const getData = async () => {
      const _data = await aboutService.getByDomain('teste.com')
      !!_data &&
        setData({
          ..._data,
          skills: []
        })
    }
    getData()
  }, [])

  return (
    <Styles.Wrapper>
      <Styles.Text>
        {!!data?.title && (
          <TextContainer title={data?.title}>
            <div dangerouslySetInnerHTML={{ __html: data?.description }} />
          </TextContainer>
        )}
      </Styles.Text>

      {!data?.image ? (
        !!data?.skills.length && (
          <Styles.Skills>
            <IconCloud slugs={data.skills} />
          </Styles.Skills>
        )
      ) : (
        <Styles.ImageWrapper>
          <img src={data?.image.src} alt={data?.image.alt} />
        </Styles.ImageWrapper>
      )}
    </Styles.Wrapper>
  )
}
