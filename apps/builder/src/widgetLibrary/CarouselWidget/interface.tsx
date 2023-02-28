import { TooltipWrapperProps } from "@/widgetLibrary/PublicSector/TooltipWrapper/interface"
import { BaseWidgetProps } from "@/widgetLibrary/interface"

export interface CarouselSettings {
  id: string
  label: string
  url: string
  alt?: string
  hidden?: boolean
}

export interface MappedCarouselData {
  ids: string[]
  label: string[]
  urls: string[]
  alts?: string[]
  isHidden?: boolean[]
}

export interface CarouselProps {
  handleOnClick: () => void
  data: CarouselSettings[]
  autoPlay?: boolean
  interval?: number
  radius?: string
  hidden?: boolean
  disabled?: boolean
  showArrows?: boolean
  showDots?: boolean
}

export interface CarouselWidgetProps
  extends CarouselProps,
    BaseWidgetProps,
    TooltipWrapperProps {
  configureMode?: "static" | "dynamic"
  dataSources?: Array<unknown>
  manualData?: CarouselSettings[]
  mappedData?: CarouselSettings[]
}
