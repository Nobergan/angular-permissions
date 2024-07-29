import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const GroupsActions = createActionGroup({
  source: "Groups",
  events: {
    opened: emptyProps(),
    closed: emptyProps(),
    // filmDetails: props<FilmRequest>(),
    // filmActors: props<FilmRequest>(),
    addGroup: props<{
      title: string;
    }>(),
    getGroups: emptyProps(),
    // addFilmVote: props<AddVotes>(),
    // checkFilmVotedByUser: emptyProps(),
    // getFilmVotes: emptyProps(),
    // getFilmsSimilar: props<FilmRequest>(),
    // genres: props<{ mediaType: string }>(),
  },
});
