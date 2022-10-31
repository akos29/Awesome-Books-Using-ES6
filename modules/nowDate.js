import * as elements from './elements.js';
import { DateTime } from './luxon.js';

export default function nowDateTime() {
  elements.date.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}