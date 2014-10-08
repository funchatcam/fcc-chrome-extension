

/**
 * Initializes everything.
 */
function init() {
  badgeAnimation_ = new BadgeAnimation();
  canvasAnimation_ = new CanvasAnimation();

  isMultiCalendar = JSON.parse(localStorage.multiCalendar || false);

  chrome.browserAction.setIcon({path: '../images/icon-16.gif'});
  badgeAnimation_.start();
  CalendarManager.pollServer();
  window.setInterval(redraw, DRAW_INTERVAL);

  chrome.tabs.onUpdated.addListener(onTabUpdated);

  chrome.browserAction.onClicked.addListener(function(tab) {
    onClickAction();
  });
};

//Adding listener when body is loaded to call init function.
window.addEventListener('load', init, false);