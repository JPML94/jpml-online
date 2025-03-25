"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause, Volume2, VolumeX, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (iframeRef.current) {
      const widget = (window as any).SC.Widget(iframeRef.current)

      widget.bind(window.SC.Widget.Events.READY, () => {
        if (isPlaying) {
          widget.play()
        } else {
          widget.pause()
        }
      })

      widget.bind(window.SC.Widget.Events.PLAY, () => {
        setIsPlaying(true)
      })

      widget.bind(window.SC.Widget.Events.PAUSE, () => {
        setIsPlaying(false)
      })
    }
  }, [isPlaying])

  const togglePlay = () => {
    if (iframeRef.current) {
      const widget = (window as any).SC.Widget(iframeRef.current)
      if (isPlaying) {
        widget.pause()
      } else {
        widget.play()
      }
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    if (iframeRef.current) {
      const widget = (window as any).SC.Widget(iframeRef.current)
      widget.setVolume(isMuted ? 100 : 0)
      setIsMuted(!isMuted)
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-4 right-4 bg-primary text-primary-foreground p-2 rounded-full shadow-lg z-50"
      >
        <button onClick={() => setShowPopup(!showPopup)} className="mr-2">
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <button onClick={toggleMute}>{isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}</button>
      </motion.div>
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-4 bg-card text-card-foreground p-4 rounded-lg shadow-lg z-50 border border-secondary/20"
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-foreground hover:text-primary"
            >
              <X size={20} />
            </button>
            <h3 className="text-lg font-semibold mb-2 text-primary">Leave this widget open for music!</h3>
            <iframe
              ref={iframeRef}
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1734880668&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}