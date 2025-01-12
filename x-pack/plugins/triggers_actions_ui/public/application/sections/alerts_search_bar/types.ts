/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { Filter } from '@kbn/es-query';
import { ValidFeatureId } from '@kbn/rule-data-utils';

export type QueryLanguageType = 'lucene' | 'kuery';

export interface AlertsSearchBarProps {
  appName: string;
  disableQueryLanguageSwitcher?: boolean;
  featureIds: ValidFeatureId[];
  rangeFrom?: string;
  rangeTo?: string;
  query?: string;
  filters?: Filter[];
  showFilterBar?: boolean;
  showDatePicker?: boolean;
  showSubmitButton?: boolean;
  placeholder?: string;
  submitOnBlur?: boolean;
  onQueryChange?: (query: {
    dateRange: { from: string; to: string; mode?: 'absolute' | 'relative' };
    query?: string;
  }) => void;
  onQuerySubmit: (query: {
    dateRange: { from: string; to: string; mode?: 'absolute' | 'relative' };
    query?: string;
  }) => void;
  onFiltersUpdated?: (filters: Filter[]) => void;
}
