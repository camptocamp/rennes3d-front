import { describe, it, expect, vi, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import HeadToolbarTrambus from '../../map/HeadToolbarTrambus.vue'

import { usePanelsStore } from '@/stores/panels'
import { useLayersStore } from '@/stores/layers'

const wrapper = mount(HeadToolbarTrambus, {
  global: {
    plugins: [
      createTestingPinia({
        createSpy: vi.fn,
      }),
    ],
  },
})
const panelsStore = usePanelsStore()
const layersStore = useLayersStore()

describe('HeadToolbarTrambus', () => {
  beforeEach(() => {})

  it('renders properly', () => {
    expect(wrapper.findAll('button').length).toBe(5)
  })
  describe('when click on metro button', () => {
    beforeEach(async () => {
      await wrapper.findAll('button')[0].trigger('click')
    })
    it('should activate metro layer', () => {
      expect(layersStore.toggleLayer).toHaveBeenLastCalledWith('metro')
    })
  })
  describe('when click on bus button', () => {
    beforeEach(async () => {
      await wrapper.findAll('button')[1].trigger('click')
    })
    it('should activate metro layer', () => {
      expect(layersStore.toggleLayer).toHaveBeenLastCalledWith('bus')
    })
  })
  describe('when click on bike button', () => {
    beforeEach(async () => {
      await wrapper.findAll('button')[2].trigger('click')
    })
    it('should activate bike layer', () => {
      expect(layersStore.toggleLayer).toHaveBeenLastCalledWith('bike')
    })
  })
  describe('when click on calendar button', () => {
    beforeEach(async () => {
      await wrapper.findAll('button')[3].trigger('click')
    })
    it('should open planning', () => {
      expect(panelsStore.isPlanningViewShown).toBeTruthy()
      expect(panelsStore.hasPlanningViewRendered).toBeTruthy()
    })
  })
})
