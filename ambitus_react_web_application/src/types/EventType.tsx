export interface EventType {
  title: String;
  description: String;
  location: String;
  date: String;
  author: String;
  image: String;
}

export type EventProps = {
  eventinfo: EventType;
};
