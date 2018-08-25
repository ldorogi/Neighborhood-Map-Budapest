import { FOURSQUARE_CLI_ID, FOURSQUARE_CLI_SECRET } from './Keys';

const api = 'https://api.foursquare.com';
const cli_id = FOURSQUARE_CLI_ID;
const cli_secret = FOURSQUARE_CLI_SECRET;
const limit = '40';
const location = 'Budapest';
const section = 'sights';

const headers = {
    'Accept': 'application/json'
  }

// getting top locations with an external API (Foursquare API) 
export const get = () =>
    fetch(`${api}/v2/venues/explore?near=${location}&client_id=${cli_id}&client_secret=${cli_secret}&v=20180822&limit=${limit}&section=${section}`, { headers })
    .then(resp => resp.json())
    .then(data => data.response.groups[0].items)