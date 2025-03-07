import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import produce from 'immer'

export type PageInfoType = {
  title: string        // 问卷标题，必填项
  desc?: string        // 问卷描述，选填
  js?: string         // 自定义 JS 代码，选填
  css?: string        // 自定义 CSS 样式，选填
  isPublished?: boolean // 问卷是否已发布，选填
}

const INIT_STATE: PageInfoType = {
  title: '',          // 标题初始为空字符串
  desc: '',           // 描述初始为空字符串
  js: '',            // JS 代码初始为空字符串
  css: '',           // CSS 样式初始为空字符串
}

const pageInfoSlice = createSlice({
  name: 'pageInfo',
  initialState: INIT_STATE,
  reducers: {
    resetPageInfo: (state: PageInfoType, action: PayloadAction<PageInfoType>) => {
      return action.payload
    },

    // 修改标题
    changePageTitle: produce((draft: PageInfoType, action: PayloadAction<string>) => {
      draft.title = action.payload
    }),
  },
})

export const { resetPageInfo, changePageTitle } = pageInfoSlice.actions

export default pageInfoSlice.reducer
