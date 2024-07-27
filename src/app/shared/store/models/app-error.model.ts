import { HttpErrorResponse } from '@angular/common/http';

/**
 * App error interface
 */
export interface AppError {
  /**
   * Error code
   */
  errorCode: string | number;

  /**
   * Api error message
   */
  message?: string;

  /**
   * Indicates which field causes error
   */
  field?: string;

  /**
   * Original http error
   */
  originalError?: HttpErrorResponse;

  /**
   * Cashbox fields validation errors
   */
  fields?: Array<{ id: number; message: string }>;
}
