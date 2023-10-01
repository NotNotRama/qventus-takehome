import { Keys } from '@/types/formTypes';
import { requirementsMap } from '@/utils/requirementsMap';

function keys<T extends Record<PropertyKey, unknown>>(o: T): Keys<T> {
  return Object.fromEntries(Object.keys(o).map((k) => [k, k])) as Keys<T>;
}

export const requirementKeys = keys(requirementsMap);
