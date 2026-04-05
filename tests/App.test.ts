import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../src/App.vue'

describe('App', () => {
  it('renders without errors', () => {
    const wrapper = mount(App)
    expect(wrapper.exists()).toBe(true)
  })

  it('renders the main landmark', () => {
    const wrapper = mount(App)
    expect(wrapper.find('main').exists()).toBe(true)
  })

  it('renders the navbar', () => {
    const wrapper = mount(App)
    expect(wrapper.find('header').exists()).toBe(true)
  })

  it('renders the footer', () => {
    const wrapper = mount(App)
    expect(wrapper.find('footer').exists()).toBe(true)
  })
})
