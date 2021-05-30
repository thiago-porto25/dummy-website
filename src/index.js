const gallery = (function () {
  const _leftArrow = document.querySelector('.left')
  const _rightArrow = document.querySelector('.right')

  const _nextSlide = () => {
    const _songsFrame = document.querySelector('.songsFrame')
    const _displayed = document.querySelector('.displayed')
    const _displayedId = _displayed.getAttribute('data-id')
    const _nextSongId = parseInt(_displayedId) + 1
    const _nextSong = document.querySelector(`[data-id='${_nextSongId}']`)

    _displayed.classList.toggle('displayed')
    _nextSong.classList.toggle('displayed')
    const _param = 40 * parseInt(_displayedId)

    _songsFrame.style.transform = `translateX(-${_param}rem)`
  }
  const _prevSlide = () => {
    const _songsFrame = document.querySelector('.songsFrame')
    const _displayed = document.querySelector('.displayed')
    const _displayedId = _displayed.getAttribute('data-id')
    const _prevSongId = parseInt(_displayedId) - 1
    const _prevSong = document.querySelector(`[data-id='${_prevSongId}']`)

    _displayed.classList.toggle('displayed')
    _prevSong.classList.toggle('displayed')
    const _param = 40 * parseInt(_prevSongId - 1)

    _songsFrame.style.transform = `translateX(-${_param}rem)`
  }

  _leftArrow.addEventListener('click', () => {
    _prevSlide()
  })
  _rightArrow.addEventListener('click', () => {
    _nextSlide()
  })
})()
