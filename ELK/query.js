let queryTemp = {
  'size': page_limit,
  'from': offset,
  'query': {
    'function_score': {
      'query': {
        'bool': {
          'should': [],
          'must_not': [
            {
              'match': {
                // is_private ㄱㅏ 1인 값들은 가져오지 않게 must_not 에 match로 
                'is_private': 1
              }
            }
          ],
          'filter': []
        }
      },
      'functions': []
    }
  },
  'sort': []
}
