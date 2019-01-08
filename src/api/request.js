import rest from 'rest';
import mime from 'rest/interceptor/mime';

export default rest.wrap(mime);
