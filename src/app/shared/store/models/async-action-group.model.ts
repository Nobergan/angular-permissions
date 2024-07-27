import {
  ActionCreatorProps,
  TypedAction,
} from '@ngrx/store/src/models';
import { createActionGroup } from '@ngrx/store';

import { AppError } from './app-error.model';

export type AsyncActionGroup<
  ActionPayload = void,
  ActionResponse = void,
> = ReturnType<
  typeof createActionGroup<
    string,
    {
      action: ActionCreatorProps<ActionPayload>;
      succeededAction: ActionCreatorProps<{
        payload: ActionResponse;
        initiator?: ActionPayload & TypedAction<string>;
      }>;
      failedAction: ActionCreatorProps<{
        error: AppError;
        initiator?: ActionPayload & TypedAction<string>;
      }>;
      clearAction: ActionCreatorProps<void>;
    }
  >
>;
