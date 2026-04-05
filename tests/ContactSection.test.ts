import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactSection from '../src/sections/ContactSection.vue'

describe('ContactSection', () => {
  it('renders the section heading', () => {
    const wrapper = mount(ContactSection)
    expect(wrapper.text()).toContain('Get In')
  })

  it('renders the contact form', () => {
    const wrapper = mount(ContactSection)
    expect(wrapper.find('form').exists()).toBe(true)
  })

  it('renders the name input', () => {
    const wrapper = mount(ContactSection)
    expect(wrapper.find('[data-testid="contact-input-name"]').exists()).toBe(true)
  })

  it('renders the email input', () => {
    const wrapper = mount(ContactSection)
    expect(wrapper.find('[data-testid="contact-input-email"]').exists()).toBe(true)
  })

  it('renders the message textarea', () => {
    const wrapper = mount(ContactSection)
    expect(wrapper.find('[data-testid="contact-input-message"]').exists()).toBe(true)
  })

  it('renders the submit button', () => {
    const wrapper = mount(ContactSection)
    expect(wrapper.find('[data-testid="contact-submit"]').exists()).toBe(true)
  })

  it('shows name error when submitted without name', async () => {
    const wrapper = mount(ContactSection)
    await wrapper.find('form').trigger('submit')
    expect(wrapper.find('[data-testid="name-error"]').exists()).toBe(true)
  })

  it('shows email error when submitted without email', async () => {
    const wrapper = mount(ContactSection)
    await wrapper.find('form').trigger('submit')
    expect(wrapper.find('[data-testid="email-error"]').exists()).toBe(true)
  })

  it('shows email error for an invalid email format', async () => {
    const wrapper = mount(ContactSection)
    await wrapper.find('[data-testid="contact-input-email"]').setValue('not-an-email')
    await wrapper.find('form').trigger('submit')
    const emailError = wrapper.find('[data-testid="email-error"]')
    expect(emailError.exists()).toBe(true)
    expect(emailError.text()).toContain('valid email')
  })

  it('shows message error when submitted without a message', async () => {
    const wrapper = mount(ContactSection)
    await wrapper.find('form').trigger('submit')
    expect(wrapper.find('[data-testid="message-error"]').exists()).toBe(true)
  })

  it('shows success state after valid form submission', async () => {
    const wrapper = mount(ContactSection)
    await wrapper.find('[data-testid="contact-input-name"]').setValue('Jane Doe')
    await wrapper.find('[data-testid="contact-input-email"]').setValue('jane@example.com')
    await wrapper.find('[data-testid="contact-input-message"]').setValue('I want to join!')
    await wrapper.find('form').trigger('submit')
    const success = wrapper.find('[data-testid="contact-success"]')
    expect(success.isVisible()).toBe(true)
  })

  it('clears form errors on a valid submission', async () => {
    const wrapper = mount(ContactSection)
    // Trigger errors first
    await wrapper.find('form').trigger('submit')
    expect(wrapper.find('[data-testid="email-error"]').exists()).toBe(true)
    // Fill form correctly
    await wrapper.find('[data-testid="contact-input-name"]').setValue('Jane Doe')
    await wrapper.find('[data-testid="contact-input-email"]').setValue('jane@example.com')
    await wrapper.find('[data-testid="contact-input-message"]').setValue('Hello!')
    await wrapper.find('form').trigger('submit')
    const success = wrapper.find('[data-testid="contact-success"]')
    expect(success.isVisible()).toBe(true)
  })
})
