import React from 'react';
import Dashboard from './views/dashboard';
import ContactOverview from './views/contact-overview';
import {
	stackScreens,
	stackConfig,
} from './root-stack';


it('(stackConfig) has initialRouteName of Dashboard', () => {
	expect(stackConfig.initialRouteName).toEqual('Dashboard');
});

it('(stackConfig) has headerMode of float', () => {
	expect(stackConfig.headerMode).toEqual('float');
});

it('(stackConfig) has mode of modal', () => {
	expect(stackConfig.mode).toEqual('modal');
});

it('(stackConfig) has a navigationOptions with gesturesEnabled as false', () =>{
	expect(stackConfig.navigationOptions.gesturesEnabled).toEqual(false);
});

it('(stackScreens) has a Dashboard screen', () => {
	expect(stackScreens.Dashboard.screen).toEqual(Dashboard);
});

it('(stackScreens) Dashboard screen has path of `dashboard`', () => {
	expect(stackScreens.Dashboard.path).toEqual('dashboard');
});

it('(stackScreens) Dashboard screen has a navigationOption title of `KeepInTouch`', () => {
	expect(stackScreens.Dashboard.navigationOptions.title).toEqual('KeepInTouch');
});

it('(stackScreens) has a ContactOverview screen', () => {
	expect(stackScreens.ContactOverview.screen).toEqual(ContactOverview);
});

it('(stackScreens) ContactOverview screen has path of `contact/:name`', () => {
	expect(stackScreens.ContactOverview.path).toEqual('contact/:name');
});

it('(stackScreens) ContactOverview screen has a navigationOption title set to the `name` route param', () => {
	const contactOverviewNavigationOptions = stackScreens.ContactOverview.navigationOptions({navigation: {state: {params: {name: 'test'}}}});
	expect(contactOverviewNavigationOptions.title).toEqual('test');
});