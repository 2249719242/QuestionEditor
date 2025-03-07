export type QuestionTextareaPropsType = {
  title?: string
  placeholder?: string
  //onChange代表一个自定义的函数，需要后续定义
  // 在这里用于处理输入框的值变化事件。
  onChange?: (newProps: QuestionTextareaPropsType) => void
  disabled?: boolean
}

export const QuestionTextareaDefaultProps: QuestionTextareaPropsType = {
  title: '输入框标题',
  placeholder: '请输入...',
}
