/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line no-unused-vars
const gallery = (function galleryHandler() {
  const _leftArrow = document.querySelector('.left')
  const _rightArrow = document.querySelector('.right')
  const _songsNavItems = document.querySelectorAll('.songsNavItem')

  const _nextSlide = () => {
    const _width = document.querySelector('.songsContainer').clientWidth
    const _songsFrame = document.querySelector('.songsFrame')

    const _displayed = document.querySelector('.displayed')

    const _displayedId = parseInt(_displayed.getAttribute('data-id'), 10)
    const _songsNavItemDisplayed = document.querySelector('.songsNavDisplayed')

    let _nextSongId = _displayedId + 1
    let _param = _width * _displayedId
    const _lastSongId = parseInt(
      _songsFrame.lastElementChild.getAttribute('data-id'),
      10
    )

    if (_displayedId === _lastSongId) {
      _nextSongId = 1
      _param = 0
    }

    const _nextSong = document.querySelector(`[data-id='${_nextSongId}']`)
    const _nextSongsNavItem = document.querySelector(
      `[data-songsNav='${_nextSongId}']`
    )
    _displayed.classList.toggle('displayed')
    _songsNavItemDisplayed.classList.toggle('songsNavDisplayed')
    _nextSong.classList.toggle('displayed')
    _nextSongsNavItem.classList.toggle('songsNavDisplayed')
    _songsFrame.style.transform = `translateX(-${_param}px)`
  }
  const _prevSlide = () => {
    const _width = document.querySelector('.songsContainer').clientWidth
    const _songsFrame = document.querySelector('.songsFrame')

    const _songsNavItemDisplayed = document.querySelector('.songsNavDisplayed')

    const _displayed = document.querySelector('.displayed')
    const _displayedId = parseInt(_displayed.getAttribute('data-id'), 10)

    let _prevSongId = _displayedId - 1
    let _param = _width * (_prevSongId - 1)

    if (_displayedId === 1) {
      const _lastSong = _songsFrame.lastElementChild
      _prevSongId = _lastSong.getAttribute('data-id')
      _param = _width * (_prevSongId - 1)
    }

    const _prevSong = document.querySelector(`[data-id='${_prevSongId}']`)
    const _prevSongsNavItem = document.querySelector(
      `[data-songsNav='${_prevSongId}']`
    )
    _displayed.classList.toggle('displayed')
    _songsNavItemDisplayed.classList.toggle('songsNavDisplayed')
    _prevSong.classList.toggle('displayed')
    _prevSongsNavItem.classList.toggle('songsNavDisplayed')
    _songsFrame.style.transform = `translateX(-${_param}px)`
  }
  const _navigateSlide = (e) => {
    const _width = document.querySelector('.songsContainer').clientWidth
    const _songsFrame = document.querySelector('.songsFrame')

    const _displayed = document.querySelector('.displayed')
    const _songsNavItemDisplayed = document.querySelector('.songsNavDisplayed')

    const _nextSongId = parseInt(e.target.getAttribute('data-songsNav'), 10)
    const _param = _width * (_nextSongId - 1)

    const _nextSong = document.querySelector(`[data-id='${_nextSongId}']`)
    const _nextSongsNavItem = document.querySelector(
      `[data-songsNav='${_nextSongId}']`
    )
    _displayed.classList.toggle('displayed')
    _songsNavItemDisplayed.classList.toggle('songsNavDisplayed')
    _nextSong.classList.toggle('displayed')
    _nextSongsNavItem.classList.toggle('songsNavDisplayed')
    _songsFrame.style.transform = `translateX(-${_param}px)`
  }

  _leftArrow.addEventListener('click', _prevSlide)
  _rightArrow.addEventListener('click', _nextSlide)
  _songsNavItems.forEach((item) =>
    item.addEventListener('click', (e) => {
      _navigateSlide(e)
    })
  )
})()
