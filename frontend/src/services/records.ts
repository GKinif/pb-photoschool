import { pbClient } from './pbClient';

interface ListQueryParams {
	sort?: string;
	filter?: string;
	expand?: string;
}

export async function listRecords(
	collection: string,
	page = 1,
	limit = 100,
	options: ListQueryParams = {}
) {
	const result = await pbClient.collection(collection).getList(page, limit, options);

	if (result?.items?.length) {
		return result.items;
	} else {
		throw new Error(`Unable to fetch ${collection}`);
	}
}

interface RecordQueryParams {
	expand?: string;
}

export async function getRecord(collection: string, recordId: string, options: RecordQueryParams) {
	const record = await pbClient.collection(collection).getOne(recordId, options);

	if (record?.id) {
		return record;
	} else {
		throw new Error(`Record not found`);
	}
}
