import {LinkType, Links} from "../models/Links.tsx";

export const links: Links[] = [
  { title: 'Play', associatedLinks: playLinks('/play'), path: '/play'},
  { title: 'Tasks', associatedLinks: taskLinks('/tasks'), path: '/tasks'},
  { title: 'Education', associatedLinks: educationLinks('/education'), path: '/education'},
  { title: 'Viewing', associatedLinks: viewingLinks('/viewing'), path: '/viewing'},
  { title: 'Community', associatedLinks: communityLinks('/community'), path: '/community'},
  { title: 'Instruments', associatedLinks: instrumentLinks('/instruments'), path: '/instruments'},
];

function playLinks(mainTitle: string): LinkType[] {
  return [
    { title: `Play online`, path: `${mainTitle}/online`},
    { title: `Play against bot`, path: `${mainTitle}/bot`},
    { title: `Play against friend`, path: `${mainTitle}/friend`},
    { title: `Play offline`, path: `${mainTitle}/offline`},
  ];
}

function taskLinks(mainTitle: string): LinkType[] {
  return [
    { title: 'Create a task', path: `${mainTitle}/#` },
    { title: 'Puzzle Streak', path: `${mainTitle}/#` },
    { title: 'Puzzle Storm', path: `${mainTitle}/#` },
    { title: 'Puzzle Racer', path: `${mainTitle}/#` },
  ];
}

function educationLinks(mainTitle: string): LinkType[] {
  return [
    { title: 'Chess basics', path: `${mainTitle}/#` },
    { title: 'Practice', path: `${mainTitle}/#` },
    { title: 'Coordinates', path: `${mainTitle}/#` },
    { title: 'Studio', path: `${mainTitle}/#` },
    { title: 'Trainers', path: `${mainTitle}/#` },
  ];
}

function viewingLinks(mainTitle: string): LinkType[] {
  return [
    { title: 'ChessHub TV', path: `${mainTitle}/#` },
    { title: 'Current games', path: `${mainTitle}/#` },
    { title: 'Streamers', path: `${mainTitle}/#` },
    { title: 'Translations', path: `${mainTitle}/#` },
    { title: 'Video library', path: `${mainTitle}/#` },
  ];
}

function communityLinks(mainTitle: string): LinkType[] {
  return [
    { title: 'Players', path: `${mainTitle}/#` },
    { title: 'Clubs', path: `${mainTitle}/#` },
    { title: 'Forum', path: `${mainTitle}/#` },
    { title: 'Blog', path: `${mainTitle}/#` },
  ];
}

function instrumentLinks(mainTitle: string): LinkType[] {
  return [
    { title: 'Analyze the game', path: `${mainTitle}/#` },
    { title: 'Debuts', path: `${mainTitle}/#` },
    { title: 'Board editor', path: `${mainTitle}/#` },
    { title: 'Import batch', path: `${mainTitle}/#` },
    { title: 'Advanced search', path: `${mainTitle}/#` },
  ];
}
