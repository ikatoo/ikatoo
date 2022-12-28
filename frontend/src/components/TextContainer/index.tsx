import Styles from './styles'

type BodyContainerProps = {
  title: string
  children: React.ReactNode
}

export const TextContainer = ({ title, children }: BodyContainerProps) => (
  <Styles.Wrapper>
    <Styles.HtmlBackground>
      <Styles.BodyBackground>
        <Styles.HeaderBackground>
          <Styles.Title aria-label={title}>{title}</Styles.Title>
        </Styles.HeaderBackground>
        <Styles.MainBackground>
          <Styles.Content>{children}</Styles.Content>
        </Styles.MainBackground>
      </Styles.BodyBackground>
    </Styles.HtmlBackground>
  </Styles.Wrapper>
)
