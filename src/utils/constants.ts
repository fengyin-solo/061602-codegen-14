import type { Weather, WeatherEffect, BerryType, GrowthStage, Personality, VisitorType, VisitorRating } from '@/types/game'

export const ATTR_MIN = 0
export const ATTR_MAX = 100
export const DEATH_THRESHOLD = 10

export const STAGE_DURATION: Record<Exclude<GrowthStage, 'adult'>, number> = {
  egg: 1,
  chick: 2,
  juvenile: 2,
  subadult: 1,
}

export const STAGE_NAMES: Record<GrowthStage, string> = {
  egg: '🥚 蛋',
  chick: '🐣 雏鸟',
  juvenile: '🐥 幼鸟',
  subadult: '🦜 亚成鸟',
  adult: '🐦 成鸟',
}

export const STAGE_EMOJI: Record<GrowthStage, string> = {
  egg: '🥚',
  chick: '🐣',
  juvenile: '🐥',
  subadult: '🦜',
  adult: '🐦',
}

export const FOOD_NEED_MULTIPLIER: Record<Exclude<GrowthStage, 'egg'>, number> = {
  chick: 1.5,
  juvenile: 1.2,
  subadult: 1.0,
  adult: 0.8,
}

export const HUNGER_DECAY_RATE = 1.5
export const FEAR_DECAY_RATE = 0.8
export const HEALTH_RECOVERY_RATE = 0.5

export const BERRY_SPAWN_INTERVAL = 4000
export const BERRY_MAX_COUNT = 8
export const BERRY_LIFETIME = 20000

export const BERRY_VALUES: Record<BerryType, number> = {
  red: 10,
  blue: 15,
  golden: 25,
}

export const BERRY_COLORS: Record<BerryType, string> = {
  red: '#C41E3A',
  blue: '#4169E1',
  golden: '#FFD700',
}

export const BERRY_EMOJI: Record<BerryType, string> = {
  red: '🍒',
  blue: '🫐',
  golden: '✨',
}

export const WEATHER_CHANGE_INTERVAL = 25000

export const WEATHER_EFFECTS: Record<Weather, WeatherEffect> = {
  sunny: { hungerMod: 1.0, fearMod: 0.8, healthMod: 1.0 },
  rainy: { hungerMod: 1.3, fearMod: 1.5, healthMod: 0.9, awayChance: 0.08 },
  snowy: { hungerMod: 1.5, fearMod: 1.2, healthMod: 0.7, sickChance: 0.12 },
  stormy: { hungerMod: 1.2, fearMod: 2.0, healthMod: 0.6, awayChance: 0.2, sickChance: 0.18 },
}

export const WEATHER_NAMES: Record<Weather, string> = {
  sunny: '☀️ 晴天',
  rainy: '🌧️ 雨天',
  snowy: '❄️ 雪天',
  stormy: '🌪️ 暴风',
}

export const WEATHER_COLORS: Record<Weather, string> = {
  sunny: 'from-amber-300/30 to-yellow-200/20',
  rainy: 'from-blue-400/40 to-gray-500/30',
  snowy: 'from-blue-100/40 to-white/30',
  stormy: 'from-gray-600/50 to-purple-800/40',
}

export const PERSONALITY_NAMES: Record<Personality, string> = {
  bold: '勇敢大胆',
  shy: '胆小害羞',
  gentle: '温柔恬静',
  curious: '好奇活泼',
  stubborn: '倔强独立',
}

export const PERSONALITY_EMOJI: Record<Personality, string> = {
  bold: '💪',
  shy: '🥺',
  gentle: '🌸',
  curious: '🌟',
  stubborn: '😤',
}

export const DAY_DURATION = 60000
export const INITIAL_FOOD = 30
export const MIN_EGGS = 2
export const MAX_EGGS = 4
export const MAX_BREEDING_ROUNDS = 2

export const BIRD_NAMES = [
  '毛毛', '豆豆', '啾啾', '喳喳', '花花', '点点', '果果', '泡泡',
  '糖糖', '圆圆', '小米', '小麦', '云朵', '星星', '月亮', '太阳',
  '小橘', '小蓝', '小绿', '小红', '阿黄', '阿白', '阿黑', '阿灰',
]

export const VISITOR_DAY_INTERVAL = 2

export const VISITOR_NAMES: Record<VisitorType, string> = {
  birdWatcher: '观鸟爱好者',
  photographer: '自然摄影师',
  scientist: '鸟类研究员',
  child: '小朋友',
  elder: '退休长者',
}

export const VISITOR_EMOJI: Record<VisitorType, string> = {
  birdWatcher: '🔭',
  photographer: '📷',
  scientist: '🔬',
  child: '👧',
  elder: '👴',
}

export const VISITOR_RATING_NAMES: Record<VisitorRating, string> = {
  bad: '不太满意',
  normal: '还不错',
  good: '非常棒',
  excellent: '太完美了',
}

export const VISITOR_RATING_COLORS: Record<VisitorRating, string> = {
  bad: 'from-red-500 to-rose-600',
  normal: 'from-blue-500 to-indigo-600',
  good: 'from-green-500 to-emerald-600',
  excellent: 'from-amber-400 to-yellow-500',
}

export const VISITOR_COMMENTS: Record<VisitorType, Record<VisitorRating, string[]>> = {
  birdWatcher: {
    bad: ['鸟儿们看起来不太精神啊...', '状态一般，希望下次能更好。'],
    normal: ['还不错，能看到这么多鸟儿。', '鸟群还算健康，继续努力。'],
    good: ['太棒了！鸟儿们都很有活力！', '这是我见过最健康的鸟群之一！'],
    excellent: ['太完美了！简直是观鸟者的天堂！', '我会推荐给所有观鸟的朋友！'],
  },
  photographer: {
    bad: ['光线和状态都不太好拍...', '鸟儿们没什么精神，很难出片。'],
    normal: ['还可以，能拍几张照片。', '鸟群状态还行，有几张好照片。'],
    good: ['太美了！每一张都是大片！', '鸟儿们毛色亮丽，太好拍了！'],
    excellent: ['这画面！直接可以当封面！', '完美的光影，完美的鸟群！'],
  },
  scientist: {
    bad: ['数据不太乐观，需要改善。', '鸟群健康指数偏低。'],
    normal: ['数据在正常范围内，还可以。', '鸟群状态基本符合预期。'],
    good: ['数据很漂亮！研究价值很高！', '鸟群健康度远超平均水平！'],
    excellent: ['完美的数据！教科书级别的鸟群！', '这是我研究过最健康的鸟群！'],
  },
  child: {
    bad: ['小鸟们好像不开心...', '希望小鸟们能更快乐一点。'],
    normal: ['好可爱的小鸟！', '小鸟们真好玩~'],
    good: ['太可爱啦！我想天天来看！', '小鸟们好活泼，我好喜欢！'],
    excellent: ['哇！这是我见过最棒的小鸟！', '我要告诉所有小伙伴这里有超可爱的小鸟！'],
  },
  elder: {
    bad: ['鸟儿们看着让人心疼...', '需要更细心地照顾啊。'],
    normal: ['还不错，小鸟们挺安逸的。', '鸟群状态还算平稳。'],
    good: ['真好啊，鸟儿们都很幸福的样子。', '看着它们心情都变好了。'],
    excellent: ['太棒了！这才是养鸟的最高境界！', '能把鸟照顾成这样，真是有心人！'],
  },
}

export const VISITOR_REWARDS: Record<VisitorRating, { food: number; scoreBonus: number }> = {
  bad: { food: 5, scoreBonus: 0 },
  normal: { food: 15, scoreBonus: 5 },
  good: { food: 30, scoreBonus: 12 },
  excellent: { food: 50, scoreBonus: 20 },
}

export const VISITOR_CRITERIA_WEIGHTS: Record<VisitorType, { health: number; count: number; diversity: number; fear: number }> = {
  birdWatcher: { health: 0.4, count: 0.3, diversity: 0.2, fear: 0.1 },
  photographer: { health: 0.5, count: 0.1, diversity: 0.3, fear: 0.1 },
  scientist: { health: 0.3, count: 0.4, diversity: 0.2, fear: 0.1 },
  child: { health: 0.2, count: 0.2, diversity: 0.1, fear: 0.5 },
  elder: { health: 0.4, count: 0.1, diversity: 0.1, fear: 0.4 },
}

export const VISITOR_RATING_THRESHOLDS: Record<VisitorRating, number> = {
  bad: 0,
  normal: 40,
  good: 70,
  excellent: 90,
}
