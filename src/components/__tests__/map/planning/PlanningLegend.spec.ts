import { describe, it, expect, vi, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import PlanningLegend from '../../../map/planning/PlanningLegend.vue'

import { usePlanningStore } from '@/stores/planning'
import { LinePlanningStateTypes } from '@/model/line-planning-state.model'

const wrapper = mount(PlanningLegend, {
  global: {
    plugins: [
      createTestingPinia({
        createSpy: vi.fn,
      }),
    ],
  },
})
const planningStore = usePlanningStore()

describe('PlanningLegend', () => {
  beforeEach(() => {})

  describe('when click on unstarted button', () => {
    beforeEach(async () => {
      const obj = await wrapper
        .findAll('.cursor-pointer')
        .filter(
          (item) => item.text() === LinePlanningStateTypes.UNSTARTED.toString()
        )
        .at(0)
      if (obj) obj.trigger('click')
    })
    it('should call planningStore for set the planning filter', () => {
      expect(planningStore.setLinePlanningState).toHaveBeenLastCalledWith(
        LinePlanningStateTypes.UNSTARTED
      )
    })
  })
  describe('when unstarted button is the only one active', () => {
    beforeEach(async () => {
      planningStore.getHighlightedId = vi.fn().mockImplementation(() => {
        return LinePlanningStateTypes.UNSTARTED.id
      })
    })
    it('should highlight only the unstarted button', () => {
      expect(
        wrapper
          .findAll('.cursor-pointer')
          .filter(
            (item) =>
              item.text() === LinePlanningStateTypes.UNSTARTED.toString()
          )[0]
          .classes()
          .find((elt: string) => elt === 'text-neutral-500')
      ).toBeFalsy()
      expect(
        wrapper
          .findAll('.cursor-pointer')
          .filter(
            (item) =>
              item.text() !== LinePlanningStateTypes.UNSTARTED.toString()
          ).length
      ).toBe(3)
      wrapper
        .findAll('.cursor-pointer')
        .filter(
          (item) => item.text() !== LinePlanningStateTypes.UNSTARTED.toString()
        )
        .forEach((elt) => {
          expect(
            elt.classes().find((elt) => elt === 'text-neutral-500')
          ).toBeTruthy()
        })
    })
  })
})
