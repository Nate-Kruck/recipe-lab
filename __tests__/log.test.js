const fs = require('fs');
const pool = require('../lib/utils/pool');
const Log = require('../lib/models/log');

describe('log routes', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('creates a log for when recipe was used', async() => {
    const log = await Log.insert({
      date: '09/22/2020',
      notes: 'best treat ever!',
      rating: 5
    });

    const test = await pool.query('SELECT * FROM logs WHERE id=$1', 
      [log.id]);

    expect(test.rows[0]).toEqual({
      id: '1',
      date: '09/22/2020',
      notes: 'best treat ever!',
      rating: 5
    });
  });
});
