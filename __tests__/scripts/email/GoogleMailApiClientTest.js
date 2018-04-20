jest.unmock('../../../src/scripts/email/GoogleMailApiClient');

import moxios from 'moxios';

import GoogleMailApiClient from '../../../src/scripts/email/GoogleMailApiClient';

describe('GoogleMailApiClient', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    describe('sendMessage', () => {
        it('sends an e-mail', (done) => {
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                
                request.respondWith({
                    status: 200
                }).then(() => {
                    expect(request.config.method).toEqual('post');
                    expect(request.config.url).toEqual(`http://${window.location.hostname}:3001/sendEmail`);

                    const actualRequestBody = JSON.parse(request.config.data);

                    expect(actualRequestBody.owner).toEqual('Bob Dole');
                    expect(actualRequestBody.dog).toEqual('Dog Dole');
                    expect(actualRequestBody.email).toEqual('bob@dole.com');
                    expect(actualRequestBody.subject).toEqual('Please watch Dog Dole for Bob Dole');
                    expect(actualRequestBody.body).toEqual('I will be out of town for the next few weeks and I\'d like someone to watch my wonderful dog, Dog Dole. Could you please do it?');
                    done();
                });
            });

            GoogleMailApiClient.sendMessage('Bob Dole', 'Dog Dole', 'bob@dole.com', 'Please watch Dog Dole for Bob Dole', 'I will be out of town for the next few weeks and I\'d like someone to watch my wonderful dog, Dog Dole. Could you please do it?');
        });
    });
});