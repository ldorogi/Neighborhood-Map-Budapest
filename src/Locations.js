import { FOURSQUARE_CLI_ID, FOURSQUARE_CLI_SECRET } from './Keys';

const api = 'https://api.foursquare.com';
const cli_id = FOURSQUARE_CLI_ID;
const cli_secret = FOURSQUARE_CLI_SECRET;
const limit = '20';
const location = 'Budapest';

const headers = {
    'Accept': 'application/json'
  }

export const get = () =>
    fetch(`${api}/v2/venues/explore?near=${location}&client_id=${cli_id}&client_secret=${cli_secret}&v=20180720&query=top%20picks&limit=${limit}`, { headers })
    .then(r => r.json())
    .then(data => data.response.groups[0].items)