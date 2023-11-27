export interface EventCardType {
  title: String;
  location: String;
  date: String;
  category: String;
  image: String;
}

export type EventCardProps = {
  eventInfo: EventCardType;
  clickAction: (e: any) => void;
};

