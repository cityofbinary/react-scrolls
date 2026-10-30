import React, { useEffect, useRef } from 'react'
import type { FC, ReactNode } from 'react'

export interface InfiniteScrollerProps {
  children: ReactNode
  canLoadMore: boolean
  loadMore: () => void
  isLoading: boolean
  loadingIndicator?: ReactNode
}

const InfiniteScroller: FC<InfiniteScrollerProps> = ({
  children,
  canLoadMore,
  loadMore,
  loadingIndicator,
  isLoading,
}) => {
  const loadTriggerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const loadTriggerElement = loadTriggerRef.current
    if (!loadTriggerElement) return

    const intersectionObserver = new IntersectionObserver(
      observedEntries => {
        if (observedEntries[0]?.isIntersecting && canLoadMore && !isLoading) {
          loadMore()
        }
      },
      { rootMargin: '20px' },
    )

    intersectionObserver.observe(loadTriggerElement)
    return () => intersectionObserver.disconnect()
  }, [canLoadMore, loadMore, isLoading])

  return (
    <>
      {children}
      {canLoadMore && (
        <div
          ref={loadTriggerRef}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 1 }}
        >
          {loadingIndicator}
        </div>
      )}
    </>
  )
}

export default InfiniteScroller
