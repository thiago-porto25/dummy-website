const gallery = (function () {
  const _leftArrow = document.querySelector('.left')
  const _rightArrow = document.querySelector('.right')

  const _nextSlide = () => {
    const _songsFrame = document.querySelector('.songsFrame')
    const _displayed = document.querySelector('.displayed')
    const _displayedId = parseInt(_displayed.getAttribute('data-id'))
    let _nextSongId = _displayedId + 1
    let _param = 40 * _displayedId

    if (_displayedId === 6) {
      _nextSongId = 1
      _param = 0
    }

    const _nextSong = document.querySelector(`[data-id='${_nextSongId}']`)
    _displayed.classList.toggle('displayed')
    _nextSong.classList.toggle('displayed')
    _songsFrame.style.transform = `translateX(-${_param}rem)`
  }
  const _prevSlide = () => {
    const _songsFrame = document.querySelector('.songsFrame')
    const _displayed = document.querySelector('.displayed')
    const _displayedId = parseInt(_displayed.getAttribute('data-id'))
    let _prevSongId = _displayedId - 1
    let _param = 40 * (_prevSongId - 1)

    if (_displayedId === 1) {
      _prevSongId = 6
      _param = 200
    }

    const _prevSong = document.querySelector(`[data-id='${_prevSongId}']`)
    _displayed.classList.toggle('displayed')
    _prevSong.classList.toggle('displayed')
    _songsFrame.style.transform = `translateX(-${_param}rem)`
  }

  _leftArrow.addEventListener('click', () => {
    _prevSlide()
  })
  _rightArrow.addEventListener('click', () => {
    _nextSlide()
  })
})()
