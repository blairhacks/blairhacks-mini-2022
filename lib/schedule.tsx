interface ScheduleItem {
	name: string;
	startTime: string;
	description: string;
}

const Schedule: ScheduleItem[] = [
	{
		name: "Check in",
		startTime: "10:30 AM",
		description: `Doors open at 10:30 AM in the main lobby. Make sure to have the [waiver](http://tinyurl.com/mini22waiver) filled out.`,
	},
	{
		name: "Opening Ceremony",
		startTime: "11:00 AM",
		description: `Join us for the opening ceremony where we will talk about what we'll being doing throughout the day!`,
	},
	{
		name: "Workshops (Session A)",
		startTime: "11:30 AM",
		description: `# Two concurrent workshops will be happening.
      \n- Intro to web development (HTML/CSS + more)
      \n - Exploring advanced web development (Learn a new framework!)
    `,
	},
	{
		name: "Lunch Period",
		startTime: "1:00 PM",
		description: `Explore the low-cost dining options around Rockville Town Square.
      \nSuggested Places:
      \n- The Spot
      \n- Panera Bread
      \n- Starbucks
      \n- Dawson's Market Cafe
      \n- Berry Cup (dessert)
      \n- Kyoto Matcha (dessert)
      \n You're welcome to stay longer than the allotted lunch period time, but we'll be waiting for you with fun activities!
    `,
	},
	{
		name: "Fun Activities",
		startTime: "1:30 PM",
		description: `Various fun games and activities will be organized!
      \n- Jackbox
      \n- Apples to Apples
      \n- Chess + board/card games
      \n- Cup stacking competition
      \n- Typing competition
    `,
	},
	{
		name: "Workshops (Session B)",
		startTime: "2:30 PM",
		description: `Two concurrent workshops will be happening.
    \n- Intro to Game Development
    \n- Hardware with Raspberry Pi's
    `,
	},
	{
		name: "Closing Ceremony",
		startTime: "4:30 PM",
		description: `Join us for the closing ceremony where we will talk about what we learned throughout the day!`,
	},
];

export default Schedule;
