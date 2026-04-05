import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TheNavbar from '../src/components/layout/TheNavbar.vue'

describe('TheNavbar', () => {
  it('renders the brand name', () => {
    const wrapper = mount(TheNavbar)
    expect(wrapper.text()).toContain('GYMFITNESS')
  })

  it('renders desktop nav links', () => {
    const wrapper = mount(TheNavbar)
    expect(wrapper.find('[data-testid="nav-link-programs"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="nav-link-trainers"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="nav-link-pricing"]').exists()).toBe(true)
  })

  it('renders the mobile menu toggle button', () => {
    const wrapper = mount(TheNavbar)
    const toggle = wrapper.find('[data-testid="nav-mobile-toggle"]')
    expect(toggle.exists()).toBe(true)
  })

  it('opens mobile menu when toggle is clicked', async () => {
    const wrapper = mount(TheNavbar)
    const toggle = wrapper.find('[data-testid="nav-mobile-toggle"]')
    await toggle.trigger('click')
    const menu = wrapper.find('#mobile-menu')
    expect(menu.classes()).not.toContain('invisible')
  })

  it('closes mobile menu when a mobile nav link is clicked', async () => {
    const wrapper = mount(TheNavbar)
    await wrapper.find('[data-testid="nav-mobile-toggle"]').trigger('click')
    await wrapper.find('[data-testid="nav-mobile-link-programs"]').trigger('click')
    const menu = wrapper.find('#mobile-menu')
    expect(menu.classes()).toContain('invisible')
  })

  it('toggle button aria-expanded reflects open state', async () => {
    const wrapper = mount(TheNavbar)
    const toggle = wrapper.find('[data-testid="nav-mobile-toggle"]')
    expect(toggle.attributes('aria-expanded')).toBe('false')
    await toggle.trigger('click')
    expect(toggle.attributes('aria-expanded')).toBe('true')
  })
})
