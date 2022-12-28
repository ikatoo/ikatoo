import Styles from './styles'

export type ProgressBarProps = {
  label?: string
  percent: number
  timeAnimation?: number
}

const ProgressBar = ({
  label,
  percent,
  timeAnimation = 0
}: ProgressBarProps) => {
  const animated = !!timeAnimation
  return (
    <Styles.Wrapper $timeAnimation={timeAnimation}>
      {(label ?? '' !== '') && <span>{label}</span>}
      <Styles.WrapperBar>
        <Styles.Bar $animated={animated} style={{ width: `${percent}%` }} />
      </Styles.WrapperBar>
    </Styles.Wrapper>
  )
}

export default ProgressBar
