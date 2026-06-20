<script setup lang="ts">
import { computed } from 'vue'
import type { Visitor } from '@/types/game'
import { VISITOR_EMOJI, VISITOR_RATING_NAMES, VISITOR_RATING_COLORS } from '@/utils/constants'

const props = defineProps<{
  visitor: Visitor | null
  show: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const ratingColorClass = computed(() => {
  if (!props.visitor) return ''
  return VISITOR_RATING_COLORS[props.visitor.rating]
})

const ratingTextClass = computed(() => {
  if (!props.visitor) return ''
  const rating = props.visitor.rating
  return rating === 'excellent' ? 'text-amber-300'
    : rating === 'good' ? 'text-green-300'
    : rating === 'normal' ? 'text-blue-300'
    : 'text-red-300'
})

const stars = computed(() => {
  if (!props.visitor) return 0
  const rating = props.visitor.rating
  return rating === 'excellent' ? 5
    : rating === 'good' ? 4
    : rating === 'normal' ? 3
    : 2
})

const starArray = computed(() => {
  return Array.from({ length: 5 }, (_, i) => i < stars.value)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="show && visitor"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        @click.self="emit('close')"
      >
        <div class="animate-pop-in max-w-md w-full">
          <div class="glass rounded-3xl overflow-hidden card-shadow border border-white/20">
            <div
              :class="[
                'p-6 text-center bg-gradient-to-br',
                ratingColorClass,
              ]"
            >
              <div class="text-6xl mb-3 animate-bounce-slow">
                {{ VISITOR_EMOJI[visitor.type] }}
              </div>
              <div class="font-display text-2xl text-white text-stroke mb-1">
                访客观察日
              </div>
              <div class="text-white/90 text-lg">
                {{ visitor.name }} 来拜访啦！
              </div>
            </div>

            <div class="p-6 space-y-4">
              <div class="text-center">
                <div class="text-white/60 text-sm mb-2">访客评价</div>
                <div :class="['font-display text-3xl mb-3', ratingTextClass]">
                  {{ VISITOR_RATING_NAMES[visitor.rating] }}
                </div>
                <div class="flex justify-center gap-1">
                  <span
                    v-for="(filled, idx) in starArray"
                    :key="idx"
                    class="text-2xl transition-all"
                    :class="filled ? 'animate-sparkle' : 'opacity-20 grayscale'"
                    :style="{ animationDelay: `${idx * 0.1}s` }"
                  >
                    {{ filled ? '⭐' : '☆' }}
                  </span>
                </div>
              </div>

              <div class="bg-white/5 rounded-2xl p-4 border border-white/10">
                <div class="text-white/60 text-xs mb-2 flex items-center gap-1">
                  <span>💬</span> 访客留言
                </div>
                <div class="text-white/90 text-base leading-relaxed">
                  「{{ visitor.comment }}」
                </div>
              </div>

              <div class="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-2xl p-4 border border-amber-400/20">
                <div class="text-white/60 text-xs mb-2 flex items-center gap-1">
                  <span>🎁</span> 获得奖励
                </div>
                <div class="flex items-center justify-around">
                  <div class="text-center">
                    <div class="text-3xl mb-1">🍒</div>
                    <div class="text-amber-300 font-bold text-xl">+{{ visitor.reward.food }}</div>
                    <div class="text-white/50 text-xs">食物</div>
                  </div>
                  <div v-if="visitor.reward.scoreBonus > 0" class="text-center">
                    <div class="text-3xl mb-1">⭐</div>
                    <div class="text-yellow-300 font-bold text-xl">+{{ visitor.reward.scoreBonus }}</div>
                    <div class="text-white/50 text-xs">积分</div>
                  </div>
                </div>
              </div>

              <button
                class="w-full py-3.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl
                       font-bold text-lg btn-3d hover:from-green-400 hover:to-emerald-500 flex items-center justify-center gap-2"
                @click="emit('close')"
              >
                <span class="text-xl">🎉</span>
                收下奖励
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
