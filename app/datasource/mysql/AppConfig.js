
'use strict';

class masterModel {
  constructor(wclient, rclient) {
    this.wclient = wclient;
    this.rclient = rclient;
  }
  save(appconfig) {
    return this.wclient('appconfig').insert(appconfig).then(result => {
      appconfig.id = result[0];
      return appconfig;
    });
  }

  delById(id) {
    return this.wclient('appconfig').where({ id: id }).del();
  }
  updateById(updateappconfig, id) {
    return this.wclient('appconfig').where({ id: id, is_inuse: 1 }).update(updateappconfig);
  }

  updateAppConfigByKey(updateAppConfig, key) {
    return this.wclient('appconfig').where({ key: key, is_inuse: 1 }).update(updateAppConfig);
  }
  findById(id) {
    return this.rclient('appconfig').select().where({ id: id, is_inuse: 1 }).limit(1)
      .then(result => {
        if (result && result.length === 1) return result[0];
        else return null;
      });
  }

  findByKey(key) {
    return this.rclient('appconfig').select().where({ key: key, is_inuse: 1 }).limit(1)
      .then(result => {
        if (result && result.length === 1) return result[0];
        else return null;
      });
  }

  find({ fields, where, order, limit, skip }) {
    let query = this.rclient('appconfig').select();
    if (fields) query = query.column(fields);
    if (where) query = query.where(where);
    if (order) query = query.orderByRaw(order);
    if (limit) query = query.limit(limit);
    if (skip) query = query.offset(skip);
    return query;
  }

  delAppConfigByKey(key) {
    return this.wclient('appconfig').where({ key: key, is_inuse: 1 }).update({ is_inuse: 0 });
  }


}

module.exports = masterModel;