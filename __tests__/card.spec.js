import { mount } from '@vue/test-utils'
import Card from '@/components/Card.vue'

// Need to Comment callItemApi() method before running unit test
// because fetch doesn't exist in Node.js as Jest tests run in Node.js
describe('Card.vue Unit Test', () => {
    const wrapper = mount(Card)

    it('should find Next Item as a button text for next item button', () => {
        expect(wrapper.text()).toMatch('Next Item')
    })

    it('should find Buy Now as a button text for next buy now button', () => {
        expect(wrapper.text()).toMatch('Buy Now')
    })
})
