import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { AppPlayBarWrapper } from './style'
import { Slider, message } from 'antd'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { getSongPlayUrl } from '@/utils/handle-player'
import { formatImgSize, formatTime } from '@/utils/format'
import {
  changePlayModeAction,
  fetchPlayerDataAction,
  handleChangeSongAction
} from '../store'

interface IProps {
  children?: ReactNode
}
const AppPlayBar: FC<IProps> = () => {
  // 0. 发起action
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchPlayerDataAction(1974443814))
  }, [])
  // 1. 从store中获取数据
  const { currentSong, lyrics, currentSongIndex, playlist, playMode } =
    useAppSelector(
      (state) => ({
        currentSong: state.player.currenSong,
        lyrics: state.player.lyrics,
        currentSongIndex: state.player.currentSongIndex,
        playlist: state.player.playlist,
        playMode: state.player.playMode
      }),
      shallowEqualApp
    )
  // 2. 定义状态
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentValue, setCurrentValue] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isSliding, setIsSliding] = useState(false)
  const [currentLyricIndex, setCurrentLyricIndex] = useState(0)
  // const [playMode, setPlayMode] = useState(0)

  // 3. 副作用
  useEffect(() => {
    // 1.获取播放歌曲的url
    const url = getSongPlayUrl(currentSong.id)

    // 2.播放歌曲
    audioRef.current && (audioRef.current.src = url)
    isPlaying && audioRef.current?.play()
  }, [currentSong])

  // 4. 事件处理
  const handlePlayStatusClick = () => {
    // 1.播放/暂停歌曲
    if (!isPlaying) {
      audioRef.current?.play()
    } else {
      audioRef.current?.pause()
    }
    // 2.切换状态
    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {
    if (isSliding) return
    // 1.获取当前播放进度时间
    const currentTime = audioRef.current!.currentTime * 1000
    // 2. 匹配歌词
    let currentIndex = lyrics.length - 1
    lyrics.forEach((item, index) => {
      if (currentTime > item.time) {
        currentIndex = index
        return
      }
    })
    if (currentLyricIndex !== currentIndex) {
      setCurrentLyricIndex(currentIndex)
    }
    // 3. 展示歌词
    currentTime > 0 &&
      message.open({
        content: lyrics[currentIndex].text,
        duration: 0,
        key: 'key'
      })

    // 4.歌曲总时间
    const totalTime = currentSong.dt
    // 5.计算进度百分比
    const currentValue = (currentTime / totalTime) * 100
    // 6.设置进度/当前时间
    setCurrentValue(currentValue)
    setCurrentTime(currentTime)
  }

  const handleSliderChanged = (currentValue: number) => {
    setIsSliding(false)
    // 1.获取当前时间
    const currentTime = (currentValue / 100) * currentSong.dt
    audioRef.current!.currentTime = currentTime / 1000
    // 2.设置当前时间/滑块位置
    setCurrentValue(currentValue)
    setCurrentTime(currentTime)
  }

  const handleSliderChanging = (currentValue: number) => {
    // 1.改变滑块目前的状态
    setIsSliding(true)
    const currentTime = (currentValue / 100) * currentSong.dt
    setCurrentValue(currentValue)
    setCurrentTime(currentTime)
  }

  const handlePlayModeChange = () => {
    let newPlayMode = playMode + 1
    if (newPlayMode === 3) {
      newPlayMode = 0
    }
    dispatch(changePlayModeAction(newPlayMode))
  }

  const handleChangeSong = (isNext: boolean) => {
    // let newSongIndex = currentSongIndex
    // switch (playMode) {
    //   case 1:
    //     newSongIndex = Math.floor(Math.random() * playlist.length)
    //     break
    //   case 0:
    //   default:
    //     newSongIndex = isNext ? currentSongIndex + 1 : currentSongIndex - 1
    //     break
    // }
    // if (newSongIndex === playlist.length) {
    //   newSongIndex = 0
    // }
    // if (newSongIndex === -1) {
    //   newSongIndex = playlist.length - 1
    // }
    // const id = playlist[newSongIndex].id
    // dispatch(fetchPlayerDataAction(id))
    dispatch(handleChangeSongAction(isNext))
  }

  const handleEnded = () => {
    // let newSongIndex = currentSongIndex
    // switch (playMode) {
    //   case 0:
    //     newSongIndex = currentSongIndex + 1
    //     break
    //   case 1:
    //     newSongIndex = Math.floor(Math.random() * playlist.length)
    //     break
    //   case 2:
    //     audioRef.current!.currentTime = 0
    //     audioRef.current!.play()
    // }
    // if (newSongIndex === playlist.length) {
    //   newSongIndex = 0
    // }
    // if (newSongIndex === -1) {
    //   newSongIndex = playlist.length - 1
    // }
    // const id = playlist[newSongIndex].id
    // dispatch(fetchPlayerDataAction(id))
    if (playMode === 2) {
      audioRef.current!.currentTime = 0
      audioRef.current!.play()
    } else {
      handleChangeSong(true)
    }
  }

  return (
    <AppPlayBarWrapper
      className="sprite_playbar"
      $isPlaying={isPlaying}
      $playMode={playMode}
    >
      <div className="wrap_980 content">
        {/* 播放按钮 */}
        <div className="play-btns">
          <div
            className="sprite_playbar btn prev"
            onClick={() => handleChangeSong(false)}
          ></div>
          <div
            className="sprite_playbar btn play"
            onClick={handlePlayStatusClick}
          ></div>
          <div
            className="sprite_playbar btn next"
            onClick={() => handleChangeSong(true)}
          ></div>
        </div>
        {/* 歌曲信息/播放进度 */}
        <div className="song-infos">
          <div className="album">
            <img src={formatImgSize(currentSong?.al?.picUrl, 34)} />
          </div>
          <div className="detail">
            <div className="top">
              <div className="name">{currentSong.name}</div>
              <div className="singer">{currentSong?.ar?.[0]?.name}</div>
            </div>
            <div className="bottom">
              <Slider
                value={currentValue}
                step={0.2}
                tooltip={{ formatter: null }}
                onAfterChange={handleSliderChanged}
                onChange={handleSliderChanging}
              />
              <div className="time">
                <span className="currentTime">{formatTime(currentTime)}</span>
                <span className="line">/</span>
                <span className="totalTime">{formatTime(currentSong.dt)}</span>
              </div>
            </div>
          </div>
        </div>
        {/* 收藏/音量等控制按钮 */}
        <div className="control">
          <div className="left">
            <div className="btn pip"></div>
            <div className="sprite_playbar btn favor"></div>
            <div className="sprite_playbar btn share"></div>
          </div>
          <div className="right">
            <div className="sprite_playbar btn volume"></div>
            <div
              className="sprite_playbar btn loop"
              onClick={handlePlayModeChange}
            ></div>
            <div className="sprite_playbar btn playlist"></div>
          </div>
        </div>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      ></audio>
    </AppPlayBarWrapper>
  )
}

export default memo(AppPlayBar)
