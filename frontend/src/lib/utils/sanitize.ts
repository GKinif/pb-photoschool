import * as DOMPurify from 'dompurify';

export const sanitizeHtml = (dirty: string): string =>
	DOMPurify.default.sanitize(dirty, { USE_PROFILES: { html: true } });
