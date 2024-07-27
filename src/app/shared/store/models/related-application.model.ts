export interface RelatedApplication {
  /**
   * Application platform name [example for android: 'play']
   */
  platform: string;
  /**
   * Application url
   */
  url: string;
  /**
   * Application id (project name)
   */
  id: string;
  /**
   * Application min version
   */
  min_version: string;
  /**
   * Application fingerprints
   */
  fingerprints: {
    type: string;
    value: string;
  }[];
}
